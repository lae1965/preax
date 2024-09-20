import Layout from '../../Layout/Layout'
import Form from '../../Form/Form'

interface WelcomeProps extends React.HTMLAttributes<HTMLElement> {}

const Welcome: React.FC<WelcomeProps> = () => {
	return (
		<Layout title='Добро пожаловать!'>
			<Form />
		</Layout>
	)
}

export default Welcome
