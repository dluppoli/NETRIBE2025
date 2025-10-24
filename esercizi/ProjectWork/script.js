let breeds=[];

async function loadBreeds()
{
    let response = await fetch('https://dogapi.dog/api/v2/breeds')
    breeds = (await response.json()).data
    console.log(breeds)

    searchBreeds()
}

function searchBreeds(page=1)
{
    document.getElementsByName('page')[0].value=page

    let pageSize = 10
    let tbody = document.getElementById('tbody')
    let searchTerm = document.getElementsByName('breed')[0].value
    let orderASC = document.getElementsByName('orderASC')[0].value
    let pagination = document.getElementById('pagination')
    let stats = document.getElementById('stats')

    let filteredBreeds = breeds
        .sort( (a,b) => {
            if(orderASC==1)
                return a.attributes.name>b.attributes.name ? 1 : -1
            else
                return a.attributes.name<b.attributes.name ? 1 : -1
        })
        .filter( b => b.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()))

    let paginatedBreeds = filteredBreeds.slice( (page-1)*pageSize, page*pageSize)
        

    tbody.innerHTML = paginatedBreeds.map(b => `<tr>
        <td>${b.attributes.name}</td>
        <td>${b.attributes.life?.min} - ${b.attributes.life?.max}</td>
        <td>${b.attributes.male_weight.min} - ${b.attributes.male_weight.max}</td>
        <td>${b.attributes.female_weight.min} - ${b.attributes.female_weight.max}</td>
    </tr>`).join('')

    let pages = Math.ceil(filteredBreeds.length / pageSize)
    let s = ""
    s+= `<a ${page==1?'class="disabled"':`onclick="searchBreeds(1)"`}>First</a>`
    s+= `<a ${page==1?'class="disabled"':`onclick="searchBreeds(${page-1})"`}>Previous</a>`
    let startPage = Math.max(page - 2,1)
    let endPage = Math.min(page + 2,pages)

    if( startPage==1 ) endPage = Math.min(5,pages)
    if( endPage==pages ) startPage = Math.max(pages-4,1)

        console.log(startPage)
        console.log(endPage)

    for(let i = startPage; i<=endPage; i++)
    {
        s += `<a onclick="searchBreeds(${i})" ${i==page ? 'class="selected"':''}>${i}</a>`
    }
    s+= `<a ${page==pages?'class="disabled"':`onclick="searchBreeds(${page+1})"`}>Next</a>`
    s+= `<a ${page==pages?'class="disabled"':`onclick="searchBreeds(${pages})"`}>Last</a>`
    pagination.innerHTML = s

    stats.innerText = `${filteredBreeds.length} breeds found. Showing page ${page} of ${pages}`
}

function toggleSort()
{
    let page = document.getElementsByName('page')[0].value
    let orderASC = document.getElementsByName('orderASC')[0].value
    orderASC = (+orderASC+1) % 2
    document.getElementsByName('orderASC')[0].value = orderASC

    document.getElementsByClassName('bi-sort-alpha-up')[0].classList.toggle('d-none')
    document.getElementsByClassName('bi-sort-alpha-down')[0].classList.toggle('d-none')

    searchBreeds(page)
}

