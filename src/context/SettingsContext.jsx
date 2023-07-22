import { createContext, useState } from 'react'



const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    number: '20',
    category: 'Sports',
    difficulty : 'hard'
  })

  const updateSetting = (property, value) => {
    setSettings({ ...settings, [property]: value })
  }


    return <SettingsContext.Provider 
        value={{ settings, updateSetting }}>
           {children}
          </SettingsContext.Provider>
}

export default SettingsContext
