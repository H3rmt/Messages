using Microsoft.AspNetCore.Components;

namespace BlazorApp.Pages;

public partial class Index
{
    [Inject]
    BlazorApp.Data.MessageLoader MessageLoader { get; set; }

    private string[] users = { "uwu", "grr", "uwu", "bernt", "fef" };

    private string name = "test Chat";

    private List<Message> messages = new List<Message>();

    private bool loading = true;


    protected override void OnInitialized()
    {
        Ticker();
        base.OnInitialized();
    }

    protected override async Task OnInitializedAsync()
    {
        await Task.Delay(1_000);
        messages = (await MessageLoader.getMessages()).ToList();
        Console.WriteLine("loaded");
        loading = false;
    }

    async void Ticker()
    {
        while (true)
        {
            if (loading)
            {
                await Task.Delay(500);
                continue;
            }
            await Task.Delay(2000);
            Console.WriteLine("added");
            Message[] n = (await MessageLoader.getNewMessages());
            messages.Insert(0, new Message("efef", "qwf", "qwf"));
            StateHasChanged();
        }
    }
}