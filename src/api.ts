export const userInfo = async () => {
    const response = await fetch('./data.json');
    const json = await response.json();
    console.log(json);
    return json;
};
