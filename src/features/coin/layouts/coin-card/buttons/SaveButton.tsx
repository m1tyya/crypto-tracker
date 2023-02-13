import { useState } from 'react';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';

import { Vector } from '~/components/vector';
import { useCoinsSavedPost } from '~/features/coin';
import { styles } from '~/styles';

type Props = {
	coinId: string;
	isSaved: boolean;
};

export function SavingButton({ coinId, isSaved }: Props) {
	const { mutate: toggleSaved, status: statusToggleSaved } = useCoinsSavedPost();
	const [isSaving, setIsSaving] = useState(false);

	async function handleSaving() {
		try {
			setIsSaving(true);
			console.log('start saving');
			await toggleSaved({ coinId, isSaved });
			setIsSaving(false);
			console.log('finished saving');
		} catch (err) {
			throw err;
		}
	}

	return (
		<button
			className={styles({
				visibility: 'hidden',
				size: '3rem',
				borderRadius: '1rem',
				backgroundColor: '#1C1C1C',
			})}
			disabled={isSaving}
			onClick={handleSaving}
			title={isSaved ? 'Unsave' : 'Save'}>
			<Vector
				position={{
					display: 'block',
					margin: '0 auto',
					color: 'white',
				}}
				Svg={isSaved ? HiOutlineX : HiOutlinePlus}
			/>
		</button>
	);
}
