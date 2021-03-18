let url = `https://a.todes.by:13555/data-service-test/api/v1/data?sys_organ=26`

const getOptionsUrl = params => {
    return Object.entries(params)
        .map(([key, value]) => {
            if (value) {
                return `${key}=${value}`
            } else {
                return `${key}`
            }
        })
        .join('&')
}

const getDataUser = async optionsUrl => {
    const urlUser = `${url}&${getOptionsUrl(optionsUrl)}`
    try {
        const response = await fetch(urlUser)
        const dataUsers = await response.json()
        const filterData = await getUserOptions(dataUsers)
        return filterData
    } catch (err) {
        alert(new Error())
    }
}

const getUserOptions = response => {
    return response.map(item => {
        return ({
            surname: item.surname,
            name: item.name,
            sname: item.sname,
            bdate: getDate(item.bdate),
            identif: item.identif,
            addressLast: getAddress(item.addressLast),
            ateAddress: item.ateAddress || '-',
            dsdDateRec: item.dsdDateRec || '-'
        })
    }
    )
}

const getAddress = ({ typeCityL, cityL, regionL, typeStreetL, streetL, house, app }) => {
    return (
        `${typeCityL ? typeCityL : ''}
         ${cityL ? cityL + ',' : ''}
         ${regionL ? regionL + ' раёон,' : ''}
         ${typeStreetL ? typeStreetL + ',' : ''}
         ${streetL ? streetL + ',' : ''}
         ${house ? 'дом ' + house + ',' : ''}
         ${app ? 'кв. ' + app : ''}`
    )
}

const getDate = value => {
    const year = value.slice(0, 4)
    const month = value.slice(4, 6)
    const date = value.substring(6)
    return `${date}.${month}.${year}`

}

export { getUserOptions, getAddress, getDataUser }
