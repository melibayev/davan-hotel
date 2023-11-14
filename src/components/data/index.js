import { Translation } from "react-i18next"
export function translateData(t, selectedCurrency, prices)  {
  return [
    {
      name: {
        room_type: t('single_room'),
        number_of_people: '1',
      },
      price_for_foreigners: '25$',
      price_for_uzbek: '270.000 Sum',
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('double_room'),
        number_of_people: '2',
      },
      price_for_foreigners: '38$',
      price_for_uzbek: '390.000 Sum',
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('triple_room'),
        number_of_people: '3',
      },
      price_for_foreigners: '51$',
      price_for_uzbek: '510.000 Sum',
      parameters: t('options_desc'),
    },
    {
      name: {
        room_type: t('lux_room'),
        number_of_people: '2',
      },
      price_for_foreigners: "54$",
      price_for_uzbek: "550.000 Sum",
      parameters: t('options_desc'),
      
    },
  ]};