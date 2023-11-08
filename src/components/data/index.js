import { Translation } from "react-i18next"
export function translateData(t, selectedCurrency, prices)  {
  return [
    {
      name: {
        room_type: t('single_room'),
        number_of_people: '1',
      },
      price: prices[selectedCurrency]['single_room'],
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('double_room'),
        number_of_people: '2',
      },
      price: prices[selectedCurrency]['double_room'],
      parameters: t('options_desc'),
      
    },
    {
      name: {
        room_type: t('triple_room'),
        number_of_people: '3',
      },
      price: prices[selectedCurrency]['triple_room'],
      parameters: t('options_desc'),
    },
    {
      name: {
        room_type: t('lux_room'),
        number_of_people: '2',
      },
      price: prices[selectedCurrency]['lux_room'],
      parameters: t('options_desc'),
      
    },
  ]};

