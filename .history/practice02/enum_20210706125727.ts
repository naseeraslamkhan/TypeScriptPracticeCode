console.log('Hello I am here enum file' );
enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

PrintMedia.Newsetter; // returns 5
PrintMedia.Magazine; // returns 15