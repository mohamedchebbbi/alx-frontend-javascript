/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}