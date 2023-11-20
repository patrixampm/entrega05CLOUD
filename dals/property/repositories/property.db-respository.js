import { ObjectId } from "mongodb";
import { propertyContext } from "../property.context.js";
export const dbRepository = {
    getPropertyList: async (country, page, pageSize) => {
        if (page && pageSize) {
            const skip = Boolean(page) ? (page - 1) * pageSize : 0;
            return await propertyContext
                .find({ "address.country": country })
                .select({
                name: 1,
                images: 1,
            })
                .skip(skip)
                .limit(pageSize)
                .lean();
        }
        return await propertyContext.find({ "address.country": country }).lean();
    },
    getProperty: async (id) => {
        return await propertyContext
            .findOne({
            _id: new ObjectId(id),
        })
            .lean();
    },
    insertReview: async (propertyId, newReview) => {
        const property = await propertyContext.findOneAndUpdate({ _id: new ObjectId(propertyId) }, { $push: { reviews: { $each: [newReview], $position: 0 } } }, { new: true, upsert: true, returnDocument: 'after' }).lean();
        return newReview;
    },
    saveProperty: async (property) => {
        return await propertyContext
            .findOneAndUpdate({
            _id: property._id,
        }, { $set: property }, { upsert: true, returnDocument: 'after' })
            .lean();
    },
};
