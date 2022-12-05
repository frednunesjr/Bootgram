export default function ProfileStats({ label, data }) {
    return (
        <div>
            <span className='fw-bold'>{data}</span>
            &nbsp;
            <span>{label}</span>
        </div>
    )
}