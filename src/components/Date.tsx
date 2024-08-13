
interface Props {
    time: string | number | Date;
    className?: string | undefined;
}

import dayjs from 'dayjs'
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";

dayjs.extend(localizedFormat);
dayjs.locale("id");



export default function Date({ time, ...props }: Props) {
    return (
        <p {...props}>{dayjs(time).format("DD MMMM YYYY")}</p>
    )
}
