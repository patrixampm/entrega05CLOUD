import { ObjectId } from 'mongodb';
export const mapReviewFromModelToApi = (review) => {
    if (review !== null || undefined) {
        return {
            id: review._id,
            reviewer_name: review.reviewer_name,
            date: review.date?.toISOString(),
            comments: review.comments,
        };
    }
    else {
        [];
    }
};
export const mapReviewListFromModelToApi = (reviewList) => Array.isArray(reviewList)
    ? reviewList.map((review) => mapReviewFromModelToApi(review))
    : [];
export const mapPropertyFromModelToApi = (property) => ({
    id: property._id.toHexString(),
    name: property.name,
    description: property.description,
    images: property.images?.picture_url,
    address: property.address,
    bedrooms: property.bedrooms,
    beds: property.beds,
    bathrooms: property.bathrooms,
    reviews: mapReviewListFromModelToApi(property.reviews),
});
export const mapPropertyListFromModelToApi = (propertyList) => Array.isArray(propertyList)
    ? propertyList.map(mapPropertyFromModelToApi)
    : [];
export const mapReviewFromApiToModel = (review) => {
    return {
        _id: review.id,
        reviewer_name: review.reviewer_name,
        date: new Date(),
        comments: review.comments,
    };
};
export const mapReviewListFromApiToModel = (reviewList) => Array.isArray(reviewList)
    ? reviewList.map((review) => mapReviewFromApiToModel(review))
    : [];
export const mapPropertyFromApiToModel = (property) => ({
    _id: new ObjectId(property.id),
    name: property.name,
    description: property.description,
    images: {
        picture_url: property.images,
    },
    address: property.address,
    bedrooms: property.bedrooms,
    beds: property.beds,
    bathrooms: property.bathrooms,
    reviews: mapReviewListFromApiToModel(property.reviews),
});
