import { ObjectId } from "mongodb";
import { db } from "../../mock-data.js";
const insertProperty = (property) => {
    const _id = new ObjectId();
    const newProperty = {
        ...property,
        _id,
    };
    db.properties = [...db.properties, newProperty];
    return newProperty;
};
const updateProperty = (property) => {
    db.properties = db.properties.map((b) => b._id.toHexString() === property._id.toHexString()
        ? { ...b, ...property }
        : b);
    return property;
};
const paginatePropertyList = (propertyList, page, pageSize) => {
    let paginatedPropertyList = [...propertyList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedPropertyList.length);
        paginatedPropertyList = paginatedPropertyList.slice(startIndex, endIndex);
    }
    return paginatedPropertyList;
};
export const mockRepository = {
    getPropertyList: async (country, page, pageSize) => paginatePropertyList(db.properties, page, pageSize),
    getProperty: async (id) => db.properties.find((b) => b._id.toHexString() === id),
    insertReview: async (propertyId, newReview) => {
        const { reviews } = db.properties.find((property) => property._id.toHexString() === propertyId);
        const foundIndex = db.properties.findIndex((property) => property._id.toHexString() === propertyId);
        db.properties[foundIndex].reviews = [newReview, ...reviews];
        return newReview;
    },
    saveProperty: async (property) => db.properties.some((b) => b._id.toHexString() === property._id.toHexString())
        ? updateProperty(property)
        : insertProperty(property),
};
