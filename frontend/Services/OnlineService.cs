namespace BlazorApp.Services;

using System.Net.Http.Json;
using System.Text.Json;
using BlazorApp.Data;

public class OnlineService
{
    private readonly HttpClient httpClient;

    public OnlineService(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    public async Task ReportOnline(string id)
    {
        // try
        // {
            var httpResponse = await httpClient.PostAsJsonAsync("authors/online", id );
            // if (!httpResponse.IsSuccessStatusCode)
            // {
            //     Console.WriteLine($"There was an error! {httpResponse.ReasonPhrase}");
            //     return null;
            // }
            return;
        // }
        // catch (Exception e)
        // {
            // Console.Write(e);
            // return null;
        // }
    }
}
