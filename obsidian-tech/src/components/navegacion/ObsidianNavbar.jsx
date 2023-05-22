import React, {useState} from 'react'

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faCircleQuestion, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

import '../navegacion/ObsidianNavbar.css'
import FilterComponent from '../filtroNavegacion/FilterComponent';

export const ObsidianNavbar = () => {

  const [clicked, setClicked] = useState(false)

  function clickear(){
    setClicked(!clicked)
  }

  return (
    <>
    <div className='navBarContainer'>
      <h2>Obsidian<span>-</span>Tech</h2>
      <div className={ clicked ? 'linksContainer active': 'linksContainer'}>
        <NavLink className='linkStyle' to={'/'}>Home</NavLink>
        <NavLink className='linkStyle' to={'/administracion'}>Administracion</NavLink>
        <NavLink className='linkStyle' to={'/nosotros'}>Nosotros</NavLink>
      </div>
      <div className='halfContainer'>
        <div className='iconContainer'>
          <button><FontAwesomeIcon icon={faUser} /></button>
          <button><FontAwesomeIcon icon={faCartShopping} /></button>
          <button><FontAwesomeIcon icon={faHeart} /></button>
          <button><FontAwesomeIcon icon={faCircleQuestion} /></button>
        </div>
        <div className='burger'>
          <button onClick={clickear}><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </div>
      <div className={clicked ? 'inputContainer active':'inputContainer'}>
        <FilterComponent/>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto velit dolor nihil officia tenetur fugit minus eaque quis repellendus quisquam odio animi debitis illo nemo nulla officiis ullam doloribus iste, magnam illum id quod libero ab. Sint dolorem voluptatum asperiores magnam provident ipsa expedita nemo modi illo unde architecto exercitationem alias eaque, cum corrupti non id. Officiis quia asperiores quae, mollitia cupiditate ea commodi voluptatem similique quaerat deleniti, at consectetur dolore nemo sit quos? Minima quam explicabo, libero quia impedit incidunt. Ipsam eius minima placeat! Sequi quod totam explicabo, nihil nulla incidunt tempora similique earum. Officiis omnis expedita odio nemo distinctio corporis illum sit non earum consectetur sint autem itaque aut ex eaque necessitatibus, dignissimos nulla odit. Maiores a, eaque quam ut fuga quis dolores illum veniam commodi voluptatem excepturi accusamus officiis. Molestiae dolor, ad dolorem facilis ab distinctio exercitationem quisquam sequi voluptas expedita, vero laborum velit ducimus aspernatur porro facere nesciunt suscipit tempora voluptatem ipsum. Fugiat tenetur repellendus facere doloremque, nisi nihil nemo. Commodi dicta, magnam quod repudiandae, error quaerat cupiditate in autem nobis deserunt corporis itaque laudantium consequatur dolorem et aperiam at ratione? Natus, rem recusandae? Alias commodi deleniti dolores fugit quis, necessitatibus aut perspiciatis! Ullam ea nesciunt molestiae molestias, libero nobis? Aperiam eum ad, excepturi deleniti adipisci molestias earum placeat eius quas culpa libero consequuntur iusto, repellat nesciunt minima! Alias, consequatur praesentium doloremque natus maiores rem eum minima labore itaque veniam fugit repellendus commodi. Provident quasi sed quo molestias alias laudantium nesciunt culpa dignissimos quaerat voluptas ab quae sunt, quas ut nam animi vero suscipit nemo. Hic architecto repellendus, saepe quod nesciunt animi totam recusandae laudantium a, quis pariatur magni quidem doloremque? Magni deleniti fuga ipsa eos nihil minus eligendi tempora hic, officia illum consequuntur est qui accusantium nostrum debitis omnis beatae quos temporibus doloremque in sit alias? Animi excepturi consequatur, et non consequuntur temporibus quisquam delectus distinctio ut iure esse quo harum! Tenetur commodi nam porro velit sit, quidem distinctio consequuntur. Cum sequi praesentium voluptatem laborum maxime numquam temporibus rerum quos asperiores earum quis, voluptatibus inventore quia amet cupiditate sapiente repellat doloribus quo molestias rem commodi quae nesciunt eum. Aspernatur inventore libero, nobis dolore quod omnis error modi tempore doloribus itaque! Odit, ullam? Quae temporibus itaque consequatur saepe adipisci, nobis asperiores voluptates, nihil, veritatis porro amet. Architecto pariatur, earum eum voluptate tempora voluptatibus voluptates autem adipisci molestiae enim explicabo repellendus eligendi fugiat nostrum cumque beatae odio tenetur officiis asperiores quo! Quo non, laboriosam quis eos fuga nulla repellendus exercitationem temporibus deserunt debitis hic odit. Atque in earum deserunt amet enim veritatis illum, commodi consequuntur quisquam adipisci quos architecto delectus magni distinctio quae, reprehenderit natus? Labore exercitationem sunt nemo laboriosam itaque veniam expedita, aut a odio, sint nesciunt maiores facilis accusantium quasi incidunt aliquam laborum provident? Eum minus molestiae odit vitae fugit exercitationem fugiat aspernatur! Adipisci dolores ipsum quia temporibus corporis? Magnam dolor quos commodi? Maxime repellendus, delectus dolorum iusto cupiditate doloribus quam deserunt qui at nostrum veritatis quidem temporibus, culpa consequuntur nobis id rerum corporis autem vel veniam perferendis, illum atque. Corrupti ad optio ratione beatae dolorum corporis repellat. Vel error ullam, nesciunt culpa animi consequatur ad aut recusandae voluptatem maiores ipsam delectus officia ut. Eveniet qui perferendis hic veniam illum enim quidem possimus porro voluptas, quam quae amet ad repellendus tenetur, non soluta assumenda temporibus cumque accusamus consectetur magni obcaecati ducimus mollitia. Qui perferendis quia labore nemo vitae consequatur nisi dolore? Iusto tempore accusamus assumenda neque. Eos quasi atque nostrum exercitationem mollitia. Magnam repudiandae numquam impedit nihil soluta accusantium, natus animi dolores mollitia, tempora perferendis excepturi? Iure consequatur itaque, quidem vero, ipsam, quisquam nesciunt aliquam cumque nobis sint dolorem ullam repellat corporis vel enim tempora. Ipsa assumenda commodi, ullam sunt minus eum iusto, numquam vitae quam sit maiores, praesentium impedit iste est voluptatem? Dignissimos sint quos dolor qui, repudiandae iste nobis molestias totam enim velit vitae necessitatibus, quod veritatis vel mollitia blanditiis harum omnis. Expedita laborum odio earum voluptate assumenda quia, fugiat eveniet explicabo aliquam sunt ab excepturi ullam optio beatae placeat unde consequatur commodi dolorem voluptatum necessitatibus temporibus rem architecto veritatis nesciunt? Et perferendis sunt dolore veritatis optio tempora ducimus amet quas, dignissimos natus voluptatibus blanditiis explicabo, deleniti modi aperiam. Corporis, quasi nihil.</p>
    </>
  )
}
