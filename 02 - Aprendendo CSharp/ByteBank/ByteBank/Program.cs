using ByteBank.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            GerenciadorBonificacao gerenciador = new GerenciadorBonificacao();

            Funcionario carlos = new Funcionario(2000, "546.985.781-98");
            carlos.Nome = "Carlos";
            carlos.AumentarSalario();

            Console.WriteLine($"Bonificação do(a) funcionário {carlos.Nome}: R${carlos.GetBonificacao()}, sobre o salário de R${carlos.Salario}");
            Console.WriteLine($"Total de funcionários: {Funcionario.TotalFuncionarios}");

            Diretor roberta = new Diretor(5000, "458.987.658-99");
            roberta.Nome = "Roberta";
            roberta.AumentarSalario();

            Console.WriteLine($"Bonificação do(a) funcionário {roberta.Nome}: R${roberta.GetBonificacao()}, sobre o salário de R${roberta.Salario}");
            Console.WriteLine($"Total de funcionários: {Funcionario.TotalFuncionarios}");

            gerenciador.Registrar(carlos);
            gerenciador.Registrar(roberta);

            Console.WriteLine($"Total de bonificações: R${gerenciador.GetTotalBonificacao()}");

            carlos.AumentarSalario();
            Console.WriteLine($"Novo salário de {carlos.Nome}: R${carlos.Salario}");

            roberta.AumentarSalario();
            Console.WriteLine($"Novo salário de {roberta.Nome}: R${roberta.Salario}");

            Console.ReadKey();
        }
    }
}
