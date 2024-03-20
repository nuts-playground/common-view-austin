export const userInfoo = async () => {
    const response = await fetch('./data.json');
    const json = await response.json();
    console.log(json);
    return json;
};
