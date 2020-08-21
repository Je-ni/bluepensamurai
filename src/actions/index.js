import axios from "axios";

export const handlError = error => {
  if (error.response && error.response.data && error.response.data.message)
    return error.response.data.message;
  return error.message;
};

export const fetchPictures = async () => {
  try {
    const res = await axios(
      "http://res.cloudinary.com/chidera/image/list/art.json"
    );

    return {
      status: res.status,
      data: res.data.resources
    };
  } catch (e) {
    console.log(e);
    return {
      status: e.status,
      message: handlError(e)
    };
  }
};
