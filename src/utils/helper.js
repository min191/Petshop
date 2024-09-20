export const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const API_LIST = "http://localhost:8080/minh/list"