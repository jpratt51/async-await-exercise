// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

async function favorite_num() {
    const url = 'http://numbersapi.com/7?json';
    const promise = await axios.get(url);
    console.log(promise.data.text);
}

favorite_num()

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

async function several_nums() {
    const url = 'http://numbersapi.com/1,2,3,4,7?json';
    const promise = await axios.get(url);
    fact_list = document.querySelector('#fact_list')

    new_li_1 = document.createElement('li')
    new_li_1.innerText = promise.data[1]
    fact_list.append(new_li_1)

    new_li_2 = document.createElement('li')
    new_li_2.innerText = promise.data[2]
    fact_list.append(new_li_2)

    new_li_3 = document.createElement('li')
    new_li_3.innerText = promise.data[3]
    fact_list.append(new_li_3)

    new_li_4 = document.createElement('li')
    new_li_4.innerText = promise.data[4]
    fact_list.append(new_li_4)

    new_li_7 = document.createElement('li')
    new_li_7.innerText = promise.data[7]
    fact_list.append(new_li_7)
}

several_nums()

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function favorite_nums() {
    const url = 'http://numbersapi.com/7?json';
    const p1Promise = axios.get(url);
    const p2Promise = axios.get(url);
    const p3Promise = axios.get(url);
    const p4Promise = axios.get(url);

    const p1 = await p1Promise;
    const p2 = await p2Promise;
    const p3 = await p3Promise;
    const p4 = await p4Promise;

    fact_list = document.querySelector('#fact_list')

    new_li_1 = document.createElement('li')
    new_li_1.innerText = p1.data.text
    fact_list.append(new_li_1)

    new_li_2 = document.createElement('li')
    new_li_2.innerText = p2.data.text
    fact_list.append(new_li_2)

    new_li_3 = document.createElement('li')
    new_li_3.innerText = p3.data.text
    fact_list.append(new_li_3)

    new_li_4 = document.createElement('li')
    new_li_4.innerText = p4.data.text
    fact_list.append(new_li_4)
}

favorite_nums()