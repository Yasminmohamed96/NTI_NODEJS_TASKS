const customer= document.querySelector('#customer')
const heads = [
    { inForm: "cust_id", inView: "id" },
    { inForm: "name", inView: "name" },
    { inForm: "balance", inView: "balance" }
]
saveDataToStorage = (data) => {
    localStorage.setItem('customers', JSON.stringify(data))
}
withdrawBalance=document.querySelector('#withdraw')
addBalance=document.querySelector('#addBalance')
getDataFromStorage = () => {
    let customers
    try {
        customers= JSON.parse(localStorage.getItem('customers'))
        if (!Array.isArray(customers)) throw new Error()
    }
    catch (e) {
        customers= []
    }
    return customers
}
const customers= getDataFromStorage()
if (customer) {
    customer.addEventListener('submit', function (e) {
        e.preventDefault()
        let customer= {}
        let n =Date.now();;
        C_id=document.querySelector("#cust_id")
        C_id.value=n;
        heads.forEach(h => customer[h.inForm] = this.elements[h.inForm].value)
        customers.push(customer)
        saveDataToStorage(customers)
        this.reset()
        window.location.replace('index.html')
    })

}
const createMyOwnElements = (element, parent, txt = "", classes = "", attributes = "") => {
    let el = document.createElement(element)
    parent.appendChild(el)
    if (txt != '') el.textContent = txt
    if (classes != "") el.classList = classes
    return el
}
const drawTable = (customers) => {
    table.textContent=""
    let thead = createMyOwnElements('thead', table)
    createMyOwnElements('th', thead, '#')
    heads.forEach(h => createMyOwnElements("th", thead, h.inView))
    createMyOwnElements('th', thead, 'actions')
    let tbody = createMyOwnElements('tbody', table)
    if (customers.length == 0) {
        let tr = createMyOwnElements('tr', tbody)
        let td = createMyOwnElements('td', tr, "no data")
        td.colSpan = "3"
    }
    else {
        customers.forEach((customer, i) => {
            let tr = createMyOwnElements('tr', tbody)
            createMyOwnElements('td', tr, i+1)
            heads.forEach((h, i) => createMyOwnElements('td', tr, customer[h.inForm]))
            let td = createMyOwnElements('td', tr)
            let delbtn = createMyOwnElements('button', td, "delete", "btn btn-danger mx-3")
            delbtn.addEventListener('click',  function() { deleteItem(i) } )
           
            let editBtn = createMyOwnElements('button', td, "withdraw", "btn btn-warning")
            editBtn.addEventListener('click', function(e){
                withdrawBalance.classList.remove('d-none')
                addBalance.classList.add('d-none')
                withdrawBalance.elements.cust_id.value = customers[i].cust_id
                withdrawBalance.elements.name.value = customers[i].name
                withdrawBalance.elements.withdraw.value = customers[i].balance
                console.log(i)
                localStorage.setItem('editIndex', i)
            })
            let addBtn = createMyOwnElements('button', td, "add balance", "btn btn-warning")
            addBtn.addEventListener('click', function(e){
                addBalance.classList.remove('d-none')
                withdrawBalance.classList.add('d-none')
                addBalance.elements.cust_id.value = customers[i].cust_id
                addBalance.elements.name.value = customers[i].name
                addBalance.elements.addB.value = customers[i].balance
                console.log(i)
                localStorage.setItem('addIndex', i)
            })
        })
    }
}
withdrawBalance.addEventListener('submit', function(e){
    e.preventDefault()
    withdrawItem();
    })
    addBalance.addEventListener('submit', function(e){
        e.preventDefault()
        addItem();
        })
    const withdrawItem = ()=>{
        let i = localStorage.getItem('editIndex')
        let customer = {
            cust_id: withdrawBalance.elements.cust_id.value,
            name : withdrawBalance.elements.name.value,
            balance :(customers[i].balance >withdrawBalance.elements.withdraw.value)?(customers[i].balance-withdrawBalance.elements.withdraw.value):customers[i].balance
        }
        customers[i]=customer
        saveDataToStorage(customers)
        withdrawBalance.classList.add('d-none')
        drawTable(customers)
    }
    const addItem = ()=>{
        let i = localStorage.getItem('addIndex')
        let customer = {
            cust_id: addBalance.elements.cust_id.value,
            name : addBalance.elements.name.value,
            balance :(customers[i].balance <=10000)?(customers[i].balance+addBalance.elements.addB.value):customers[i].balance
        }
        customers[i]=customer
        saveDataToStorage(customers)
        withdrawBalance.classList.add('d-none')
        drawTable(customers)
    }
const deleteItem = (index)=>{
    customers.splice(index, 1)
    saveDataToStorage(customers)
    drawTable(customers)
}


const table = document.querySelector('#tableData')
if (table) {
    drawTable(customers)
}