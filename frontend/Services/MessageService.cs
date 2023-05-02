namespace BlazorApp.Services;

using System.Net.Http.Json;
using System.Text.Json;
using BlazorApp.Data;

public class MessageService
{
    private readonly HttpClient httpClient;

    public MessageService(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    public async Task CreateMessage(string message, Author author)
    {
        try
        {
            var httpResponse = await httpClient.PostAsJsonAsync<CreateMessage>("messages/new", new CreateMessage { text = message, author = author.id });
            if (!httpResponse.IsSuccessStatusCode)
            {
                Console.WriteLine($"There was an error! {httpResponse.ReasonPhrase}");
                return;
            }
        }
        catch (Exception e)
        {
            Console.Write(e);
        }
    }

    public async Task<IEnumerable<Message>> GetMessages()
    {
        try
        {
            return await httpClient.GetFromJsonAsync<Message[]>("messages/all") ?? Array.Empty<Message>();
        }
        catch (Exception e)
        {
            Console.Write(e);
            return Array.Empty<Message>();
        }
    }

    public async Task<IEnumerable<Message>> getNewMessages(long date)
    {
        try
        {
            return await httpClient.GetFromJsonAsync<Message[]>($"messages/getNew/{date}") ?? Array.Empty<Message>();
        }
        catch
        {
            return Array.Empty<Message>();
        }
    }
}
