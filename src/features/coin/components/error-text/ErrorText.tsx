import { styles } from '~/styles';

type Props = {
	errorMessage: string;
};

export function ErrorText({ errorMessage }: Props) {
	return (
		<p
			className={styles({
				color: '$error',
				fontSize: '$10',
				marginLeft: '$2',
				marginTop: '$2',
			})}>
			{errorMessage}
		</p>
	);
}
