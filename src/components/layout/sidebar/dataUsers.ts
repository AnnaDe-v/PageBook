import {UserType} from "../../../types";
import {v4 as uuidv4} from "uuid";

export const users: UserType[] = [
    {
        _id: uuidv4(),
        avatar:
            'https://cdn.pixabay.com/photo/2014/10/28/22/19/young-507297_960_720.jpg',
        name: 'Петр Лялин',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://мед-дент.рф/images/id/normal/1563694154.jpg',
        name: 'Иван Часов',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://c4.wallpaperflare.com/wallpaper/918/912/880/johannes-strate-skarf-man-face-wallpaper-preview.jpg',
        name: 'Максим Гудков',
        isInNetwork: false,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://sun9-2.userapi.com/impf/c639524/v639524222/4e35a/R4320_oO-wg.jpg?size=604x403&quality=96&sign=782db985fb0be2e93103eea6741a6875&type=album',
        name: 'Мария Желева',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://sun9-2.userapi.com/impf/c639524/v639524222/4e35a/R4320_oO-wg.jpg?size=604x403&quality=96&sign=782db985fb0be2e93103eea6741a6875&type=album',
        name: 'Ray',
        isInNetwork: true,
    },
]