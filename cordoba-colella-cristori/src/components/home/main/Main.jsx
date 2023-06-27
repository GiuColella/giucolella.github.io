
import Card from './card/Card';
import './main.css'

const imgCard = {
    key1: {
        nameCard: 'Attack of Titan',
        img: 'imgcard/Attack_of_Titan.png',
    },
    key2: {
        nameCard: 'Black Clover',
        img: 'imgcard/Black_Clover.png',
    },
    key3: {
        nameCard: 'Code Geass',
        img: 'imgcard/Code_Geass.png',
    },
    key4: {
        nameCard: 'Date a Live',
        img: 'imgcard/Date_a_Live.png',
    },
    key5: {
        nameCard: 'Demon Slayer',
        img: 'imgcard/Demon_Slayer.png',
    },
    key6: {
        nameCard: 'Hells Paradise',
        img: 'imgcard/Hells_Paradise.png',
    },
    key7: {
        nameCard: 'Hellsing',
        img: 'imgcard/Hellsing.png',
    },
    key8: {
        nameCard: 'Jojos',
        img: 'imgcard/Jojos.png',
    },
    key9: {
        nameCard: 'Jujutsu Kaisen',
        img: 'imgcard/Jujutsu_Kaisen.png',
    },
    key10: {
        nameCard: 'Noblesse',
        img: 'imgcard/Noblesse.png',
    },
    key11: {
        nameCard: 'One Piece',
        img: 'imgcard/One_Piece.png',
    },
    key12: {
        nameCard: 'Vanitas',
        img: 'imgcard/Vanitas.png',
    },
}

export default function Main() {

    return (
        <div className='cont_main'>
            <div className='cont_card f1'>
                <Card imgCard={imgCard} cardKey= 'key1'/>
                <Card imgCard={imgCard} cardKey= 'key3'/>
                <Card imgCard={imgCard} cardKey= 'key6'/>
            </div>
            <div className='cont_card f2'>
                <Card imgCard={imgCard} cardKey= 'key2'/>
                <Card imgCard={imgCard} cardKey= 'key8'/>
                <Card imgCard={imgCard} cardKey= 'key12'/>
            </div>
            <div className='cont_card f3'>
                <Card imgCard={imgCard} cardKey= 'key4'/>
                <Card imgCard={imgCard} cardKey= 'key10'/>
                <Card imgCard={imgCard} cardKey= 'key5'/>
            </div>
            <div className='cont_card f4'>
                <Card imgCard={imgCard} cardKey= 'key7'/>
                <Card imgCard={imgCard} cardKey= 'key11'/>
                <Card imgCard={imgCard} cardKey= 'key9'/>
            </div>
        </div>
    );
}