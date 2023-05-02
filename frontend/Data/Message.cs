namespace BlazorApp.Data;

public readonly record struct Message(string id, string text, string author, long date);

public readonly record struct CreateMessage(string text, string author);
