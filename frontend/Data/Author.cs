namespace BlazorApp.Data;

public readonly record struct Author(string id, string name);

public readonly record struct CreateAuthor(string name);
