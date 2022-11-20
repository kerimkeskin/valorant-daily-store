/* eslint-disable no-unused-vars */
import Dropdown from 'components/dropdown/dropdown';
import React, { useState } from 'react';

interface IProps {
  value: any;
  errorText?: string;
  optionLabel?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, value: any) => void;
  placeholder?: string;
  emptyText?: string;
}

const SkinDropdown: React.FC<IProps> = (props) => {
  const { value, onChange, ...other } = props;

  const [data] = useState([
    {
      uuid: '89baf0f4-4648-69fc-f0af-2fbc69b97b80',
      displayName: 'Xenohunter Odin',
      levelItem: null,
      displayIcon: 'https://media.valorant-api.com/weaponskinlevels/89baf0f4-4648-69fc-f0af-2fbc69b97b80/displayicon.png',
      streamedVideo: 'https://valorant.dyn.riotcdn.net/x/videos/release-05.10/32f7797f-4491-e21f-e40b-cfb639df3c97_default_universal.mp4',
      assetPath: 'ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Alien/Levels/HMG_Alien_Lv1_PrimaryAsset',
    },
    {
      uuid: 'a00e2e2b-431a-1f84-e6d0-a58f4fe1e56b',
      displayName: 'Rune Stone Odin',
      levelItem: null,
      displayIcon: 'https://media.valorant-api.com/weaponskinlevels/a00e2e2b-431a-1f84-e6d0-a58f4fe1e56b/displayicon.png',
      streamedVideo: null,
      assetPath: 'ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Codex/Levels/HMG_Codex_Lv1_PrimaryAsset',
    },
    {
      uuid: 'ef564ec3-497c-3038-543e-eb94bbe46437',
      displayName: 'Prime//2.0 Odin',
      levelItem: null,
      displayIcon: 'https://media.valorant-api.com/weaponskinlevels/ef564ec3-497c-3038-543e-eb94bbe46437/displayicon.png',
      streamedVideo: 'https://valorant.dyn.riotcdn.net/x/videos/release-05.10/07c47f26-4dd6-fe8f-bcdc-18b9c1425667_default_universal.mp4',
      assetPath: 'ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Levels/HeavyMachineGun_HypeBeast2_Lv1_PrimaryAsset',
    },
  ]);

  return <Dropdown value={value} data={data} onChange={onChange} optionValue="uuid" {...other} />;
};

export default SkinDropdown;
