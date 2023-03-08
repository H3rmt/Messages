namespace BlazorApp.Services;

using System.Net.Http.Json;
using System.Text.Json;
using BlazorApp.Data;

public class AuthorService
{
    private readonly HttpClient httpClient;

    public AuthorService(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    public async Task<CreateResponse<Author>> CreateAuthor(string name)
    {
        // try
        // {
            var httpResponse = await httpClient.PostAsJsonAsync<CreateAuthor>("authors/new", new CreateAuthor { name = name });
            // if (!httpResponse.IsSuccessStatusCode)
            // {
            //     Console.WriteLine($"There was an error! {httpResponse.ReasonPhrase}");
            //     return null;
            // }
            return await httpResponse.Content.ReadFromJsonAsync<CreateResponse<Author>>();
        // }
        // catch (Exception e)
        // {
            // Console.Write(e);
            // return null;
        // }
    }

    public async Task<IEnumerable<Author>> GetAuthors()
    {
        try
        {
            return await httpClient.GetFromJsonAsync<Author[]>("authors/all") ?? Array.Empty<Author>();
        }
        catch (Exception e)
        {
            Console.Write(e);
            return Array.Empty<Author>();
        }
    }
}
