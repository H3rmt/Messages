namespace BlazorApp.Data;

public class MessageLoader
{
    private int lastMessage = 0;

    public Task<Message[]> getMessages()
    {
        return Task.FromResult(Enumerable.Range(1, 5).Select(index => new Message("me", "message", "12.4.2020")).ToArray());
    }

    public Task<Message[]> getNewMessages()
    {
        return Task.FromResult(new List<Message> { new Message("me2", "message", "14.4.2020") }.ToArray());
    }
}
