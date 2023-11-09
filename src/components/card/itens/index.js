import { Item } from "./styles"

export function Itens(props) {
  return (

    <Item>
      <span class="material-symbols-outlined">
        {props.icon}
      </span>
      <hgroup>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </hgroup>

    </Item>
  )
}