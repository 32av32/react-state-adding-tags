import styles from '../Form.module.css'

interface IProps {
    text: string
    deleteTag: Function
}

export default function SearchTag({text, deleteTag}: IProps) {
    return (
        <div className={styles.tag_item}>
            <div className={styles.tag_text}>{text}</div>
            <div className={styles.tag_image} onClick={() => deleteTag()}><img alt='close' src='/assets/Close.svg'/></div>
        </div>
    )
}