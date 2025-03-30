export async function fetchAvailablePlaces() { 
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to fetch places.");
    }
    return resData;
}
export async function fetchuserPlaces() { 
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to fetch user places.");
    }
    return resData;
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': "application/json"
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to update places.");
    }
    return resData.message;
};