const valueInputLabels = {
    surname: { name: 'surname', placeholder: 'введите фамилию', label: 'Фамилия' },
    name: { name: 'name', placeholder: 'введите имя', label: 'Имя' },
    patronymic: { name: 'patronymic', placeholder: 'введите отчество', label: 'Отчество' },
    identif: { name: 'identif', placeholder: 'введите номер', label: 'Индефикационный номер' },
    doc_series: { name: 'doc_series', label: 'Серия' },
    doc_num: { name: 'doc_num', label: '№ паспорта' }
}

const columnsTable = [
    { id: 1, label: 'Фамилия', minWidth: 100 },
    { id: 2, label: 'Имя', minWidth: 120 },
    { id: 3, label: 'Отчество', minWidth: 120 },
    { id: 4, label: 'Дата рождения', minWidth: 120 },
    { id: 5, label: 'Идентификационный номер', minWidth: 120 },
    { id: 6, label: 'Адрес регистрации (после конвертации)', minWidth: 100 },
    { id: 7, label: 'Адрес регистрации (коды АТЕ и ТЕ) ', minWidth: 100 },
    { id: 8, label: 'Дата регистрации', minWidth: 50 },
]

export { valueInputLabels, columnsTable }