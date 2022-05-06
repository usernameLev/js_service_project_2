const postData = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  } catch (error) {
    return {};
  }
};

const getResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    return {};
  }
};

export { postData, getResource };
