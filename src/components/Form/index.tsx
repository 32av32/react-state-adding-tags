import React, {ChangeEvent, MouseEvent} from "react";
import styles from "./Form.module.css";
import SearchTag from "./SearchTag";

export default function Form() {
    const [text, setText] = React.useState('')
    const [inputError, setInputError] = React.useState('Поле ввода не может быть пустым')
    const [inputDirty, setInputDirty] = React.useState(false)
    const [tags, setTags] = React.useState<string[]>([])

    const inputBlur = () => {
        setInputDirty(true)
    }
    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        e.target.value !== '' ? setInputError('') : setInputError('Поле ввода не может быть пустым')
    }
    const addTag = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (text === '') {
            setInputError('Поле ввода не может быть пустым')
            return
        }
        setTags([...tags, text])
        setText('')
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter((tag, index) => id !== index))
    }

    return (
        <div className={styles.container}>
            <form className={`${(inputError && inputDirty) && styles.is_error}`} name='form'>
                <input onChange={(e) => inputChange(e)} onBlur={inputBlur} value={text}/>
                <button onClick={(e) => addTag(e)} disabled={!!(inputError)} >Send</button>
                { (inputError && inputDirty) && <span>{inputError}</span> }
                {/*{ messageStatus && <span>{messageStatus}</span> }*/}
            </form>
            <div className={styles.tags_container}>
                { tags.map((tag, index) => <SearchTag text={tag} deleteTag={() => deleteTag(index)} />) }
            </div>
        </div>
    );
}