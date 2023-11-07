import { Translation } from "react-i18next"
export function translateData(t)  {
  return [
    {
      name: {
        room_type: t('single_room'),
        number_of_people: '1',
      },
      price: '5654',
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('double_room'),
        number_of_people: '2',
      },
      price: '500 000 UZS',
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('triple_room'),
        number_of_people: '3',
      },
      price: '600 000 UZS',
      parameters: t('options_desc'),
    },
    {
      name: {
        room_type: t('lux_room'),
        number_of_people: '2',
      },
      price: '700 000 UZS',
      parameters: t('options_desc'),
      
    },
  ]};

