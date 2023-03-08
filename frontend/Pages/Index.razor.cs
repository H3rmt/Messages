using BlazorApp.Data;
using Microsoft.AspNetCore.Components;

namespace BlazorApp.Pages;

public partial class Index : ComponentBase
{
    [Inject]
    BlazorApp.Services.MessageService MessageService { get; set; }

    [Inject]
    BlazorApp.Services.AuthorService AuthorService { get; set; }

    private string name = "Chat";

    private List<Message> messages = new List<Message>();

    private List<Author> authors = new List<Author>();

    private Author? author = null;

    private bool loading = true;

    private string message = "";

    private string username = "";

    private long lastCheck = DateTime.Now.ToFileTimeUtc() / 10000;

    protected override void OnInitialized()
    {
        base.OnInitialized();
        CheckNewMessages();
        CheckAuthors();
    }

    protected override async Task OnInitializedAsync()
    {
        messages = (await MessageService.GetMessages()).ToList();
        this.sort();

        authors = (await AuthorService.GetAuthors()).ToList();
        loading = false;
    }

    async void CheckAuthors()
    {
        while (true)
        {
            if (loading)
            {
                await Task.Delay(200);
                continue;
            }
            await Task.Delay(2000);

            authors = (await AuthorService.GetAuthors()).ToList();
            StateHasChanged();
        }
    }

    async void CheckNewMessages()
    {
        while (true)
        {
            if (loading)
            {
                await Task.Delay(200);
                continue;
            }
            await Task.Delay(500);

            long newCheck = DateTime.Now.ToFileTimeUtc() / 10000;
            List<Message> n = (await MessageService.getNewMessages(lastCheck)).ToList();
            lastCheck = newCheck;
            if (n.Count() != 0)
            {
                messages.AddRange(n);
                this.sort();
                StateHasChanged();
            }
        }
    }

    private void sort()
    {
        messages = messages
        .GroupBy(x => x.id)
        .Select(x => x.First())
        .OrderByDescending(o => o.date)
        .ToList();
    }

    private async void send()
    {
        if (author is not null)
        {
            await MessageService.CreateMessage(message, (Author)author);
            messages = (await MessageService.GetMessages()).ToList();
            this.sort();
            message = "";
            StateHasChanged();
        }
    }

    private async void join()
    {
        if (username != "")
        {
            CreateResponse<Author> createAuthor = await AuthorService.CreateAuthor(username);
            Console.WriteLine(createAuthor);
            author = createAuthor.data;
            username = "";
        }
    }
}