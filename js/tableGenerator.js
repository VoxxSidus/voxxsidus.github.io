const prices = [
    // Soul ash
    [
        [1, 180, 180, 360],
        [2, 150, 330, 660],
        [3, 130, 460, 920],
        [4, 105, 565, 1130],
        [5, 90, 655, 1310],
        [6, 75, 730, 1460],
        [7, 70, 800, 1600],
        [8, 60, 860, 1720],
        [9, 55, 915, 1830],
        [10, 45, 960, 1920],
        [11, 40, 1000, 2000],
        [12, 30, 1030, 2060]
    ],

    // Soul cinders
    [
        ["1 - 8", 0, 0, 0],
        [9, 60, 60, 120],
        [10, 50, 110, 220],
        [11, 40, 150, 300],
        [12, 30, 180, 360]
    ]
];

let ashTableData = document.getElementById("table-ash");
let cindersTableData = document.getElementById("table-cinders");

function generateHead() {
    return `
    <thead>
    <tr>
        <th>LAYER</th>
        <th>AMOUNT</th>
        <th>TOTAL</th>
        <th>BOTH WINGS</th>
    </tr>
    </thead>
    `;
}

function generateCurrencyTable(currency) {
    let table = generateHead();
    table += `<tbody>`;
    for (i = 0; i < prices[currency].length; i++) {
        table += `
        <tr>
            <th>${prices[currency][i][0]}</th>
            <th class="fw-normal">${prices[currency][i][1]}</th>
            <th class="fw-normal">${prices[currency][i][2]}</th>
            <th class="fw-normal">${prices[currency][i][3]}</th>
        </tr>
        `;
    }
    table += '</tbody>';

    return table;
}

ashTableData.innerHTML = generateCurrencyTable(0);
cindersTableData.innerHTML = generateCurrencyTable(1);
