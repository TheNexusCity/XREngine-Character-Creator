import { HotbarMenu, UserMenuPanels } from "@xrengine/client-core/src/user/components/UserMenu"
import CharacterCreator from "./CharacterCreator"
import InventoryIcon from '@mui/icons-material/Inventory'

const CharacterCreatorPanels = {
  CharacterCreator: 'CharacterCreator',
}

UserMenuPanels.set(CharacterCreatorPanels.CharacterCreator, CharacterCreator)

HotbarMenu.set(CharacterCreatorPanels.CharacterCreator, InventoryIcon)

export default () => null!