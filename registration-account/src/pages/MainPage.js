import React, { useState, useEffect, useReducer } from 'react'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { getDataUser } from '../services/service'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: theme.spacing(1),
    },
    sidebar: {
        maxWidth: '270px'
    },
    wrapperForm: {
        minWidth: '270px',
        marginLeft: '5px',
    },
    header: {
        marginRight: '8px',
        marginLeft: '5px',
    },
    grid: {
        flexWrap: 'nowrap',
    }
}));

const MainPage = () => {
    const classes = useStyles();
    const [filterParams, setFilterParams] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        const dataUser = localStorage.getItem('dataUser')

        if (dataUser) {
            setUsers(JSON.parse(dataUser))
        }

        if (!filterParams) {
            return
        }

        if (filterParams) {
            (async () => {
                const params = await getDataUser(filterParams)
                if (params) {
                    setUsers(params)
                } else {
                    alert('В базе данных, ничего не найдено!!!!')
                    setUsers([])
                }
            })()
        }
    }, [filterParams])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(users))
    }, [users])

    const submitForm = params => {
        setFilterParams(params)
    }

    return (
        <Grid container>
            <Grid item xs={12} className={classes.header}>
                <Header title={'главная'} color={'#00A2E8'} />
            </Grid>
            <Grid container xs={12} className={classes.grid} spacing={1}>
                <Grid item xs={2} className={classes.wrapperForm}>
                    <Header title={'регистрационный учет'} color={'#1565C0'} />
                    <Sidebar submitForm={data => submitForm(data)} />
                </Grid>
                <Grid item xs={10} >
                    <Header title={'Результаты поиска'} color={'#D9E8FC'} />
                    <Content users={users} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainPage