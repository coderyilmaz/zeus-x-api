import {Zeus} from "./Zeus.mjs";

const zeus = new Zeus('KEY_ADD');

// # GETBALANCE # //
await zeus.getBalance();

// # GETMAIL # //
await zeus.getPurchase('HOTMAIL',1);
