import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldComponent from '../../components/TextFieldComponent'
import { valueInputLabels } from '../../constans/labelTexts'
import ButtonComponent from '../../components/ButtonComponent'

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    logo: {
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        background: '#F0DFB8',
        color: 'white',
        textTransform: 'uppercase'
    },
    wrapper: {
        display: 'flex',
    },
}));

const Sidebar = ({ submitForm, }) => {
    const classes = useStyles();
    const [user, setUser] = useState(
        {
            name: '',
            surname: '',
            patronymic: '',
            identif: '',
            doc_series: '',
            doc_num: ''
        }
    )

    const onChangeText = (name, value) => {
        setUser({ ...user, [name]: value })
    }

    const renderInput = input => {
        return (
            <TextFieldComponent
                {...input}
                onChangeTex={value => onChangeText(input.name, value)}
                valueInput={user[input.name]}
            />
        )
    }

    useEffect(() => {
        const valueInput = localStorage.getItem('valueInput')
        if (valueInput) {
            setUser(JSON.parse(valueInput))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueInput', JSON.stringify(user))
    }, [user])


    return (<Grid className={classes.wrapperForm}>
        <form
            className={classes.form}
            onSubmit={e => {
                const { identif, doc_num, surname } = user

                if (identif || doc_num || surname) {
                    submitForm(user)
                    e.preventDefault()
                } else {
                    e.preventDefault()
                    alert(' Для успешного запроса необходимо  заполнить хотябы одно  поле: 1.фамилия 2. № паспорта 3. идентификационный номер')
                }
            }}
        >
            {
                renderInput(valueInputLabels.surname)
            }
            {
                renderInput(valueInputLabels.name)
            }
            {
                renderInput(valueInputLabels.patronymic)
            }
            {
                renderInput(valueInputLabels.identif)
            }
            <div className={classes.wrapper}>
                {
                    renderInput(valueInputLabels.doc_series)
                }
                {
                    renderInput(valueInputLabels.doc_num)
                }
            </div>
            <ButtonComponent submitForm={submitForm} />
        </form>
    </Grid >
    )
}

export default Sidebar