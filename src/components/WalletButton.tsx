'use client';

import { CHAIN_ID, CHAIN_PARAMS } from '@/utils/constant';
import { truncate } from '@/utils/generator';

import { showNotification } from '@mantine/notifications';
import { useMetaMask } from 'metamask-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const WalletButton = () => {
	const router = useRouter();
	const { status, connect, addChain, chainId, switchChain, account } =
		useMetaMask();
	const [account_wallet, setWallet] = useState('');

	const handleConnect = async () => {
		console.log('hello');

		try {
			await connect();
		} catch (error) {
			showNotification({
				message: 'Failed to connect with MetaMask',
				color: 'red',
			});
		}
	};

	const handleNetworkChange = async () => {
		try {
			await switchChain(CHAIN_ID);
			router.refresh();
		} catch (error: any) {
			if (error.code === 4902) {
				await addChain(CHAIN_PARAMS);
				await switchChain(CHAIN_ID);
				router.refresh();
			} else {
				showNotification({
					message: 'Failed to change network',
					color: 'red',
				});
			}
		}
	};

	useEffect(() => {
		if (status === 'notConnected') {
			showNotification({
				message: 'MetaMask is not connected yet!',
				color: 'red',
			});
		} else if (status === 'unavailable') {
			showNotification({
				message: 'No wallet detected!',
				color: 'red',
			});
		} else if (status === 'connected') {
			setWallet(account.toLowerCase());
		}
	}, [status, account]);

	useEffect(() => {
		if (status === 'connected' && chainId !== CHAIN_ID) {
			handleNetworkChange();
			showNotification({ message: 'Wrong network!', color: 'red' });
		}
	}, [status, chainId]);

	return (
		<>
			<button
				onClick={() => handleConnect()}
				type="button"
				className="hidden md:inline-block text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
				{status === 'initializing' || status === 'notConnected'
					? 'Connect Wallet'
					: truncate(account_wallet, 4, 4, 11)}
			</button>
		</>
	);
};
