bino.gen <- function (samples = 10000, n = 20, pi = 0.5)
{
  #�ڣ�0��1������samples*n�οɷŻ�ʵ�顣
  values <- sample(c(0, 1), samples * n, replace = TRUE,
                   prob = c(1 - pi, pi)) 
  #��������������Ϊn
  value.mat <- matrix(values, ncol = n)
  #������value.mat �е�ֵӦ��sum�������߽�Ϊ1
  Successes <- apply(value.mat, 1, sum)
  a1 <- round((table(Successes)/samples), 3)
  b1 <- round(dbinom(0:n, n, pi), 3)
  names(b1) <- 0:n
  hist(Successes, breaks = c((-0.5 + 0):(n + 0.5)), freq = FALSE,
       ylab = "", col = 13, ylim = c(0, max(a1, b1)),
       main = " Theoretical Values Superimposed Over Histogram of Simulated Values")
  x <- 0:n
  fx <- dbinom(x, n, pi)
  #��ֱ��ͼÿ����Ŀ���м���Ӵ�ֱ��
  lines(x, fx, type = "h")
  #��ֱ��ͼÿ����ߵ����ʵ��Բ��
  lines(x, fx, type = "p", pch = 16)
  list(simulated.distribution = a1, theoretical.distribution = b1)
} 
set.seed(31)
bino.gen(sample=1000,n=5,p=0.5)

#rbinom() looks more like normal distribution
set.seed(123)
x<-rbinom(1000,5,0.5)
table(x)/1000


#p(6<=x<=10)
sum(dbinom(6:10,10,0.33))
#1-p(x<=5)
1-pbinom(5,10,0.33)
#���߻���Ϊȫ��



1 - ppois(q = 7, lambda = 4)
ppois(q = 7, lambda = 4, lower = FALSE)
ppois(q = 3, lambda = 8)
ppois(q=3,lambda = 8,lower = TRUE)

?dpois

size <- 100;p<- 0.08;n<- 100
x<- 0:size
xx<- round(dbinom(x,n,p),3)
yy<- round(dpois(x,p*n,1/2),3)

plot(x,yy-xx,type = 'p')



opar<-  par(no.readonly = TRUE)
par(mfrow=c(1,2),pty='s')
x<- 0:15
px<- dgeom(x,.3)
plot(x,px,type = 'h')
xs<-rep(0:15,round(dgeom(0:15,.3)*100000,0))
#�ظ�1-15�е�����ÿ����Ӧ0-15 p=0.3���ηֲ�100000����������
plot(ecdf(xs),main='CDF of X~geom(0.3)',ylab = 'P(X<=x)')
#ecdf���㾭����۷ֲ�����




opar <- par(no.readonly = TRUE)
par(mfrow=c(1, 2), pty = "s")
x <- 0:20
r <- 6
px <- dnbinom(x, r, .5)
plot(x, px, type = "h", xlab = "x", ylab="P(X = x)",
  main = "PDF of X ~ NB(6, 0.5)")
xs <- rep(0:20, round(dnbinom(0:20, r, 0.5)*100000, 0))
plot(ecdf(xs), main = "CDF of X ~ NB(6, 0.5)",
     ylab = expression(P(X <=x)),
     xlab = "x")
par(opar)# reset to original parameters

table(quine$Age)
xtabs(~Age,data=quine)
opar <- par(no.readonly = TRUE) # read in current parameters
par(mfrow=c(2, 2)) # change parameters
barplot(xtabs(~ Age, data = quine), col = "gray90", xlab = "Age",ylab = "Frequency")
barplot(prop.table(xtabs(~ Age, data = quine)), col = "gray90", xlab = "Age", ylab = "Relative Frequency")
par(opar)# reset to original parameters

factorial(7)/(factorial(2))

pnorm(115, 100, 10) - pnorm(90, 100, 10)
qnorm(0.9, 100, 10)
qnorm(0.1 + pnorm(105, 100, 10), 100, 10)

x<-(0:100)/100
px1<-dbinom(3,5,x)
px2<-dbinom(2,3,x)
plot(x, px2, type = "l", xlab = "x", ylab="P(X = x)",main = "PDF of X~Bin(2,3,x) and X~Bin(3,5,x)",col="blue")
lines(x,px1,col="red")
