import { atom } from 'jotai'
import {Message} from "@/app/components/chat/message";

export const messagesAtom = atom<Message[]>([]);
