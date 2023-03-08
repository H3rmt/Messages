namespace BlazorApp.Data;

public readonly record struct CreateResponse<T>(string msg, T data);