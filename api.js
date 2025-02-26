export const api_url = "https://zenquotes.io/api/quotes";

const apiCall = () => {
  return fetch(api_url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      throw new Error(err.message);
    });
};

apiCall();

// export const apiData = [
//   {
//     q: "Life is a succession of lessons, which must be lived to be understood.",
//     a: "Ralph Waldo Emerson",
//     c: "70",
//     h: "<blockquote>&ldquo;Life is a succession of lessons, which must be lived to be understood.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>",
//   },
//   {
//     q: "Everything has beauty but not everyone sees it.",
//     a: "Confucius",
//     c: "47",
//     h: "<blockquote>&ldquo;Everything has beauty but not everyone sees it.&rdquo; &mdash; <footer>Confucius</footer></blockquote>",
//   },
//   {
//     q: "A leader is one who knows the way, goes the way, and shows the way.",
//     a: "Unknown",
//     c: "67",
//     h: "<blockquote>&ldquo;A leader is one who knows the way, goes the way, and shows the way.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
//   },
//   {
//     q: "If you love life, don't waste time, for time is what life is made up of. ",
//     a: "Bruce Lee",
//     c: "73",
//     h: "<blockquote>&ldquo;If you love life, don't waste time, for time is what life is made up of. &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>",
//   },
//   {
//     q: "Walking with a friend in the dark is better than walking alone in the light.",
//     a: "Helen Keller",
//     c: "76",
//     h: "<blockquote>&ldquo;Walking with a friend in the dark is better than walking alone in the light.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>",
//   },
//   {
//     q: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
//     a: "Roy T. Bennett",
//     c: "118",
//     h: "<blockquote>&ldquo;Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
//   },
//   {
//     q: "The way we feel is the direct result of what we think.",
//     a: "Peter A. Cohen",
//     c: "54",
//     h: "<blockquote>&ldquo;The way we feel is the direct result of what we think.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>",
//   },
//   {
//     q: "To be fully alive is to feel that everything is possible.",
//     a: "Eric Hoffer",
//     c: "57",
//     h: "<blockquote>&ldquo;To be fully alive is to feel that everything is possible.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>",
//   },
//   {
//     q: "Live calmly. The time will come when the flowers bloom by themselves.",
//     a: "Zen Proverb",
//     c: "69",
//     h: "<blockquote>&ldquo;Live calmly. The time will come when the flowers bloom by themselves.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
//   },
//   {
//     q: "Changing minds is harder than finding people who already agree.",
//     a: "Jack Butcher",
//     c: "63",
//     h: "<blockquote>&ldquo;Changing minds is harder than finding people who already agree.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>",
//   },
//   {
//     q: "The best way out is always through.",
//     a: "Robert Frost",
//     c: "35",
//     h: "<blockquote>&ldquo;The best way out is always through.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>",
//   },
//   {
//     q: "The people who are crazy enough to think they can change the world are the ones who do.",
//     a: "Steve Jobs",
//     c: "87",
//     h: "<blockquote>&ldquo;The people who are crazy enough to think they can change the world are the ones who do.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>",
//   },
//   {
//     q: "A good teacher opens the door for you, but you must enter the room by yourself.",
//     a: "Zen Proverb",
//     c: "79",
//     h: "<blockquote>&ldquo;A good teacher opens the door for you, but you must enter the room by yourself.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
//   },
//   {
//     q: "Decide upon your major definite purpose in life and then organize all your activities around it.",
//     a: "Brian Tracy",
//     c: "96",
//     h: "<blockquote>&ldquo;Decide upon your major definite purpose in life and then organize all your activities around it.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
//   },
//   {
//     q: "He who has overcome his fears will truly be free.",
//     a: "Aristotle",
//     c: "49",
//     h: "<blockquote>&ldquo;He who has overcome his fears will truly be free.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
//   },
//   {
//     q: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
//     a: "Ayn Rand",
//     c: "87",
//     h: "<blockquote>&ldquo;A creative man is motivated by the desire to achieve, not by the desire to beat others.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
//   },
//   {
//     q: "Doubt is an uncomfortable condition, but certainty is a ridiculous one.",
//     a: "Voltaire",
//     c: "71",
//     h: "<blockquote>&ldquo;Doubt is an uncomfortable condition, but certainty is a ridiculous one.&rdquo; &mdash; <footer>Voltaire</footer></blockquote>",
//   },
//   {
//     q: "A poet should be so crafty with words that he is envied even for his pains.",
//     a: "Criss Jami",
//     c: "75",
//     h: "<blockquote>&ldquo;A poet should be so crafty with words that he is envied even for his pains.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>",
//   },
//   {
//     q: "Don't gain the world and lose your soul. Wisdom is better than silver and gold.",
//     a: "Bob Marley",
//     c: "79",
//     h: "<blockquote>&ldquo;Don't gain the world and lose your soul. Wisdom is better than silver and gold.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>",
//   },
//   {
//     q: "Always look on the bright side of things. If you can't comprehend this, polish that which has become dull until it begins to shine.",
//     a: "Zen Proverb",
//     c: "131",
//     h: "<blockquote>&ldquo;Always look on the bright side of things. If you can't comprehend this, polish that which has become dull until it begins to shine.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
//   },
//   {
//     q: "One of the advantages of being disorganized is that one is always having surprising discoveries.",
//     a: "A.A. Milne",
//     c: "96",
//     h: "<blockquote>&ldquo;One of the advantages of being disorganized is that one is always having surprising discoveries.&rdquo; &mdash; <footer>A.A. Milne</footer></blockquote>",
//   },
//   {
//     q: "The wisest men follow their own direction.",
//     a: "Euripides",
//     c: "42",
//     h: "<blockquote>&ldquo;The wisest men follow their own direction.&rdquo; &mdash; <footer>Euripides</footer></blockquote>",
//   },
//   {
//     q: "Get busy living, or get busy dying.",
//     a: "Stephen King",
//     c: "35",
//     h: "<blockquote>&ldquo;Get busy living, or get busy dying.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>",
//   },
//   {
//     q: "Better to die fighting for freedom than be a prisoner all the days of your life.",
//     a: "Bob Marley",
//     c: "80",
//     h: "<blockquote>&ldquo;Better to die fighting for freedom than be a prisoner all the days of your life.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>",
//   },
//   {
//     q: "Don't criticize what you can't understand. ",
//     a: "Bob Dylan",
//     c: "43",
//     h: "<blockquote>&ldquo;Don't criticize what you can't understand. &rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>",
//   },
//   {
//     q: "Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.",
//     a: "Eckhart Tolle",
//     c: "137",
//     h: "<blockquote>&ldquo;Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>",
//   },
//   {
//     q: "The only way to 'find out if it will work out' is to do it.",
//     a: "Simon Sinek",
//     c: "59",
//     h: "<blockquote>&ldquo;The only way to 'find out if it will work out' is to do it.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>",
//   },
//   {
//     q: "There is nothing like looking if you want to find something.",
//     a: "J.R.R. Tolkien",
//     c: "60",
//     h: "<blockquote>&ldquo;There is nothing like looking if you want to find something.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>",
//   },
//   {
//     q: "All animals except man know that the principal business of life is to enjoy it.",
//     a: "Samuel Butler",
//     c: "79",
//     h: "<blockquote>&ldquo;All animals except man know that the principal business of life is to enjoy it.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
//   },
//   {
//     q: "We will outstretch the hand if you unclench your fist.",
//     a: "Barack Obama",
//     c: "54",
//     h: "<blockquote>&ldquo;We will outstretch the hand if you unclench your fist.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>",
//   },
//   {
//     q: "You can calculate the worth of a man by the number of his enemies.",
//     a: "Gustave Flaubert",
//     c: "66",
//     h: "<blockquote>&ldquo;You can calculate the worth of a man by the number of his enemies.&rdquo; &mdash; <footer>Gustave Flaubert</footer></blockquote>",
//   },
//   {
//     q: "I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.",
//     a: "Elon Musk",
//     c: "97",
//     h: "<blockquote>&ldquo;I take the position that I'm always to some degree wrong, and the aspiration is to be less wrong.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>",
//   },
//   {
//     q: "What's obvious to you isn't obvious to most people. Operate from this perspective and you'll help more people.",
//     a: "Jack Butcher",
//     c: "110",
//     h: "<blockquote>&ldquo;What's obvious to you isn't obvious to most people. Operate from this perspective and you'll help more people.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>",
//   },
//   {
//     q: "The purpose of life is the life of purpose.",
//     a: "Robin Sharma",
//     c: "43",
//     h: "<blockquote>&ldquo;The purpose of life is the life of purpose.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>",
//   },
//   {
//     q: "You may forget with whom you laughed, but you will never forget with whom you wept.  ",
//     a: "Kahlil Gibran",
//     c: "85",
//     h: "<blockquote>&ldquo;You may forget with whom you laughed, but you will never forget with whom you wept.  &rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>",
//   },
//   {
//     q: "It doesn't matter if the glass is half empty or half full. Be grateful you have a glass - you're the only person that can decide what's in it.",
//     a: "Gurbaksh Chahal",
//     c: "142",
//     h: "<blockquote>&ldquo;It doesn't matter if the glass is half empty or half full. Be grateful you have a glass - you're the only person that can decide what's in it.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>",
//   },
//   {
//     q: "You are the only real obstacle in your path to a fulfilling life.",
//     a: "Les Brown",
//     c: "65",
//     h: "<blockquote>&ldquo;You are the only real obstacle in your path to a fulfilling life.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
//   },
//   {
//     q: "Where words fail, music speaks.",
//     a: "Hans Christian Andersen",
//     c: "31",
//     h: "<blockquote>&ldquo;Where words fail, music speaks.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>",
//   },
//   {
//     q: "People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.",
//     a: "Andrew Carnegie",
//     c: "123",
//     h: "<blockquote>&ldquo;People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>",
//   },
//   {
//     q: "All great truths begin as blasphemies.",
//     a: "George Bernard Shaw",
//     c: "38",
//     h: "<blockquote>&ldquo;All great truths begin as blasphemies.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>",
//   },
//   {
//     q: "A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.",
//     a: "Roy T. Bennett",
//     c: "99",
//     h: "<blockquote>&ldquo;A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
//   },
//   {
//     q: "Success is not the result of making money; making money is the result of success - and success is in direct proportion to our service.",
//     a: "Earl Nightingale",
//     c: "134",
//     h: "<blockquote>&ldquo;Success is not the result of making money; making money is the result of success - and success is in direct proportion to our service.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>",
//   },
//   {
//     q: "Dreams have only one owner at a time. That's why dreamers are lonely.",
//     a: "William Faulkner",
//     c: "69",
//     h: "<blockquote>&ldquo;Dreams have only one owner at a time. That's why dreamers are lonely.&rdquo; &mdash; <footer>William Faulkner</footer></blockquote>",
//   },
//   {
//     q: "No man is happy unless he believes he is.",
//     a: "Publilius Syrus",
//     c: "41",
//     h: "<blockquote>&ldquo;No man is happy unless he believes he is.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>",
//   },
//   {
//     q: "There is no truth. There is only perception.",
//     a: "Gustave Flaubert",
//     c: "44",
//     h: "<blockquote>&ldquo;There is no truth. There is only perception.&rdquo; &mdash; <footer>Gustave Flaubert</footer></blockquote>",
//   },
//   {
//     q: "The key to success is action.",
//     a: "Brian Tracy",
//     c: "29",
//     h: "<blockquote>&ldquo;The key to success is action.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
//   },
//   {
//     q: "Mind is the creator of everything. You should therefore guide it to create only good.",
//     a: "Paramahansa Yogananda",
//     c: "85",
//     h: "<blockquote>&ldquo;Mind is the creator of everything. You should therefore guide it to create only good.&rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>",
//   },
//   {
//     q: "Who you are is defined by what you're willing to struggle for.",
//     a: "Mark Manson",
//     c: "62",
//     h: "<blockquote>&ldquo;Who you are is defined by what you're willing to struggle for.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>",
//   },
//   {
//     q: "If you read a lot of books, you're considered well-read. But if you watch a lot of TV, you're not considered well-viewed.",
//     a: "Lily Tomlin",
//     c: "121",
//     h: "<blockquote>&ldquo;If you read a lot of books, you're considered well-read. But if you watch a lot of TV, you're not considered well-viewed.&rdquo; &mdash; <footer>Lily Tomlin</footer></blockquote>",
//   },
//   {
//     q: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
//     a: "Eleanor Roosevelt",
//     c: "77",
//     h: "<blockquote>&ldquo;Do what you feel in your heart to be right - for you'll be criticized anyway.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>",
//   },
// ];
