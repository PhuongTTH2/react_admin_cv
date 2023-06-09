select * from employee where salary > (select avg(salary) from employee)


select * from employee where (name, salary) in (
    select name, max(salary) from employee group by name
)
select distinct name from employee;
select * from department where name not in (
    select distinct name from employee
)

select * from employee as e1

where salary > ( select avg(salary) from employee as e2 
where e1.name = e2.name
)


select * from (select name, sum(price) as total_sales from sales group by name ) as sales
inner join  ( select avg(total_sales) as sales
from (select name, sum(price) as total_sales from sales group by name ) ) avg_sales
on sales.total_sales > avg_sales.sales

select *, ( case when salary > (select avg(salary) from employee)
            then "Higher"
            else "Lesser"
            end
) as remarks from employee;

update employee e set salary = (salary max(salary) + min(salary) from employee e1 where e.name =e1.name)
where e.name in( select name from department d where d.location = 'A')