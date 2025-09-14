export class RestClient {
  static baseUrl = "http://localhost:8081";

  // : Promise<any> - this is the method return type
  static async getBooks(): Promise<any> {
    const url = `${RestClient.baseUrl}/books`;
    const response = await fetch(url); // fetch() takes the URL of an API endpoint and returns a promise that resolves to a Response object. This object contains metadata about the response (Like Strtus codes, headers, body etc.)
    return await response.json(); // The response object has methods to extract the actual data from the response body. These methods also return a promise, withc resolves to the data itself after its been parsed.
    //The json() method reads the body of the Response object and parses it as a JavaScript object (e.g. turning a JSON string like {"name" : "Alice"} into a native JavaScript object { name: "Alice"})
  }

  static async getBook(id: number): Promise<any> {
    // (id: numeber) - in TypeScript this means that the parameter must return a number. id is the name of the parameter, number is the type.
    const url = `${RestClient.baseUrl}/books/${id}`;
    const response = await fetch(url);
    return await response.json();
  }

  static addReview(id: number, review: any): Promise<any> {
    const url = `${RestClient.baseUrl}/addReviewForBook/${id}`;
    return fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
  }
}
