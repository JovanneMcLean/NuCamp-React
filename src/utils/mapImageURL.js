import { baseUrl } from "../app/shared/baseUrl";

export const mapImageURL = (error) => {
    return error.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};
