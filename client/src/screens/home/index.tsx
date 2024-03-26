import { InputMask } from '@react-input/mask';

import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { CreateCategoryDialog } from '../../components/create-category-dialog';
import { CreateTransactionDialog } from '../../components/create-transaction-dialog';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Transaction } from '../../components/transaction';
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransactionGroup,
} from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateTransactionDialog />
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card variant="balance" title="Saldo" amount={10000}></Card>
            <Card variant="revenues" title="Receitas" amount={10000}></Card>
            <Card variant="outgoing" title="Gastos" amount={10000}></Card>
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no período"
              />
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="dark"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transações" subtitle="Gastos no período" />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar transação" />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            <Transaction
              id={1}
              amount={20000}
              date="25/03/2024"
              category={{ title: 'Alimentação', color: '#067432' }}
              title="Mercado"
            />
            <Transaction
              id={2}
              amount={20000}
              date="25/03/2024"
              category={{ title: 'Alimentação', color: '#067432' }}
              title="Mercado"
            />
            <Transaction
              id={3}
              amount={20000}
              date="25/03/2024"
              category={{ title: 'Alimentação', color: '#067432' }}
              title="Mercado"
            />
            <Transaction
              id={4}
              amount={20000}
              date="25/03/2024"
              category={{ title: 'Alimentação', color: '#067432' }}
              title="Mercado"
            />
            <Transaction
              id={5}
              amount={20000}
              date="25/03/2024"
              category={{ title: 'Alimentação', color: '#067432' }}
              title="Mercado"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  );
}
